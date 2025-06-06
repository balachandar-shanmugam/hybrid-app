FROM europe-docker.pkg.dev/mgmt-bak-bld-1dd7/main/mgmt/bak/al20479/images/base_image/nginxinc/nginx-unprivileged:1.26-alpine

LABEL maintainer="VBP Web Team"
LABEL workstream="Voyager Banking Platform"
LABEL email="pavel.popovici@lloydsbanking.com"

ARG BRAND_TO_BUILD='.'
ARG BASE_PATH='/'
ENV BASE_PATH=${BASE_PATH}

# copy nginx conf and config
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx/healthz.html /usr/share/nginx/html${BASE_PATH}/healthz.html
COPY --chown=nginx:0 nginx/default.template /etc/nginx/templates/
#COPY --chown=nginx:0 nginx/compression.conf /etc/nginx/conf.d/

RUN envsubst "\${BASE_PATH}" < /etc/nginx/templates/default.template > /etc/nginx/conf.d/default.conf

COPY ./dist/${BRAND_TO_BUILD} /usr/share/nginx/html${BASE_PATH}
