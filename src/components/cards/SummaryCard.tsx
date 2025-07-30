import React, { ReactElement } from 'react';

import {
  Text,
  Box,
  Button,
  Strong,
  } from '@constellation/core';
  import { SummaryCardProps } from './summaryCard.config';

export function SummaryCardComponent({title, highlight, items, actions }): ReactElement<SummaryCardProps> {

  return (
          <Box className="summary-item">
              {/* Title */}
              <Text  size='s2'>
                <Strong>{title}</Strong>
              </Text><i className="fas fa-info-circle"></i>

              {/* Cards highlight */}
              {highlight && 
              <Box bgColor="information"  marginTop="03" marginBottom="02"
                style={{borderRadius: '10px', padding: '14px',paddingRight: "0"}}>
                <Text as="p">
                  <Text marginRight="04"> <Strong>{highlight.label}</Strong></Text> 
                  <Text className="fs12" style={{display:"inline-flex"}}>
                    {highlight.subtext}<i style={{paddingLeft: "2px"}} className="fa-solid fa-rotate"></i>
                  </Text>
                </Text>
                <Text size='s3'><Strong> {highlight ? highlight.amount : "£9000"}</Strong></Text>
              </Box>
              }

              {/* Lists */}
              {items.map((item, index)=>(
              <div className="list">
                <Text as="span">{item.label}</Text>
                <Text><Strong>{item.value}</Strong></Text>
              </div>
              ))}

              {/* Buttons */}
              
                <div className="button-group" style={{display:"flex",justifyContent:"space-between", margin: "14px 0"}}> 
                  {actions && actions.map((action)=>(
                    <Button variation={action.type}>{action.label}</Button>
                  ))}
                </div>
          </Box>
  )
}