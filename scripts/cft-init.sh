#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;92m'
YELLOW='\033[33;49;1m'
BLUE='\033[36;49;1m'
PANEL='\033[90;107;1m'
RESET='\033[0m'

show_help()
{
echo -e "
${PANEL}

  Usage: cft-init.sh [-s] [[-h]

  -s  Skip.
  -h  Display this help screen.

  For Example: ./cft-init.sh -s

${RESET}
"
}

while getopts sh flag
do
  case "${flag}" in
    s) SKIP=1 ;;
    h) show_help
       exit
       ;;
  esac
done

message() {
  printf "${1}${2}${RESET}\n"
}

# GCP CNE NEXUS: https://nexus.vbp-bld.oncp.dev/repository/raw-internal
# On-prem NEXUS: https://consumer-servicing.service.test.group/nexus_csvs_venus/repository/interstellar-raw-internal

NEXUS_URL='https://nexus.vbp-bld.oncp.dev/repository/raw-internal'
CFT_VERSION=$(grep 'CFT_VERSION' .env)
declare "${CFT_VERSION}"
CFT_BINARY=$(grep 'CFT_BINARY' .env)
declare "${CFT_BINARY}"
CFT_INSTALL_PATH=$(grep 'CFT_INSTALL_PATH' .env)
declare "${CFT_INSTALL_PATH}"

message "${GREEN}" "NEXUS_URL: ${NEXUS_URL}"
message "${GREEN}" "CFT_VERSION: ${CFT_VERSION}"
message "${GREEN}" "CFT_BINARY: ${CFT_BINARY}"

case $(uname | tr '[:upper:]' '[:lower:]') in
  linux*)
    export OS_NAME=linux
    export CFT_PLATFORM=linux64
    export CFT_PLATFORM_CHROME_PATH="linux-${CFT_VERSION}/chrome-${CFT_PLATFORM}/chrome"
    export CFT_PLATFORM_CHROMEDRIVER_PATH="linux-${CFT_VERSION}/chromedriver-${CFT_PLATFORM}/chromedriver"
    ;;
  darwin*)
    export OS_NAME=osx
    if [[ $(uname -m) == arm* ]]; then
      export CFT_PLATFORM=mac-arm64
      export CFT_PLATFORM_CHROME_PATH="mac_arm-${CFT_VERSION}/chrome-${CFT_PLATFORM}/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"
      export CFT_PLATFORM_CHROMEDRIVER_PATH="mac_arm-${CFT_VERSION}/chromedriver-${CFT_PLATFORM}/chromedriver"
    else
      export CFT_PLATFORM=mac-x64
      export CFT_PLATFORM_CHROME_PATH="mac-${CFT_VERSION}/chrome-${CFT_PLATFORM}/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"
      export CFT_PLATFORM_CHROMEDRIVER_PATH="mac-${CFT_VERSION}/chromedriver-${CFT_PLATFORM}/chromedriver"
    fi
    ;;
  mingw64*)
    export OS_NAME=windows
    if [[ $(uname -m) == 'x86_64' ]]; then
      export CFT_PLATFORM=win64
      export CFT_PLATFORM_CHROME_PATH="${CFT_PLATFORM}-${CFT_VERSION}/chrome-${CFT_PLATFORM}/chrome.exe"
      export CFT_PLATFORM_CHROMEDRIVER_PATH="${CFT_PLATFORM}-${CFT_VERSION}/chromedriver-${CFT_PLATFORM}/chromedriver.exe"
    else
      export CFT_PLATFORM=win32
      export CFT_PLATFORM_CHROME_PATH="${CFT_PLATFORM}-${CFT_VERSION}/chrome-${CFT_PLATFORM}/chrome.exe"
      export CFT_PLATFORM_CHROMEDRIVER_PATH="${CFT_PLATFORM}-${CFT_VERSION}/chromedriver-${CFT_PLATFORM}/chromedriver.exe"
    fi
    ;;
  *)
    export OS_NAME=notset
    export CFT_PLATFORM=notset
    export CFT_PLATFORM_CHROME_PATH=notset
    export CFT_PLATFORM_CHROMEDRIVER_PATH=notset
    ;;
esac

message "${GREEN}" "OS_NAME: ${OS_NAME}"
message "${GREEN}" "CFT_PLATFORM: ${CFT_PLATFORM}"
message "${GREEN}" "CFT_PLATFORM_CHROME_PATH: ${CFT_PLATFORM_CHROME_PATH}"
message "${GREEN}" "CFT_PLATFORM_CHROMEDRIVER_PATH: ${CFT_PLATFORM_CHROMEDRIVER_PATH}"

message "${GREEN}" "CFT_INSTALL_PATH: ${CFT_INSTALL_PATH}"
# install path is set
if [ -n "${CFT_INSTALL_PATH}" ]; then
  if [ "${CFT_INSTALL_PATH}" == "pwd" ]; then
    CFT_BROWSER_CACHE_FOLDER="$(${CFT_INSTALL_PATH})"
  else
    CFT_BROWSER_CACHE_FOLDER="${CFT_INSTALL_PATH}"
  fi
else
  message "${YELLOW}" "CFT_INSTALL_PATH is not set... default to ${HOME}"
  CFT_BROWSER_CACHE_FOLDER="${HOME}"
fi
message "${GREEN}" "CFT_BROWSER_CACHE_FOLDER: ${CFT_BROWSER_CACHE_FOLDER}"

export CFT_CHROME_BINARY_PATH="${CFT_BROWSER_CACHE_FOLDER}/browser-cache/chrome/${CFT_PLATFORM_CHROME_PATH}"
export CFT_CHROMEDRIVER_BINARY_PATH="${CFT_BROWSER_CACHE_FOLDER}/browser-cache/chromedriver/${CFT_PLATFORM_CHROMEDRIVER_PATH}"
message "${GREEN}" "CFT_CHROME_BINARY_PATH: ${CFT_CHROME_BINARY_PATH}"
message "${GREEN}" "CFT_CHROMEDRIVER_BINARY_PATH: ${CFT_CHROMEDRIVER_BINARY_PATH}"

if [ -z "${SKIP}" ]; then
  message "${BLUE}" "Performing Chrome install..."
  set -x
  npx @puppeteer/browsers install "${CFT_BINARY}@${CFT_VERSION}" --path "${CFT_BROWSER_CACHE_FOLDER}/browser-cache" --base-url "${NEXUS_URL}/${CFT_BINARY}"
  set +x

  message "${BLUE}" "Performing ChromeDriver install..."
  npx @puppeteer/browsers install "chromedriver@${CFT_VERSION}" --path "${CFT_BROWSER_CACHE_FOLDER}/browser-cache" --base-url "${NEXUS_URL}/chromedriver"
else
  message "${YELLOW}" "Installation skipped..."
fi


