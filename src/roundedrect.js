import React from 'react'



export const roundedRect = (
                      rectX, 
                      rectY,
                      roundedRectWidth,
                      roundedRectHeight,
                      radius
                      ) => {
        return (
          <shape>
            <moveTo
              x={rectX}
              y={rectY + radius}
            />
            <lineTo
              x={rectX}
              y={rectY + roundedRectHeight - radius}
            />
            <quadraticCurveTo
              cpX={rectX}
              cpY={rectY + roundedRectHeight}
              x={rectX + radius}
              y={rectY + roundedRectHeight}
            />
            <lineTo
              x={rectX + roundedRectWidth - radius}
              y={rectY + roundedRectHeight}
            />
            <quadraticCurveTo
              cpX={rectX + roundedRectWidth}
              cpY={rectY + roundedRectHeight}
              x={rectX + roundedRectWidth}
              y={rectY + roundedRectHeight - radius}
            />
            <lineTo
              x={rectX + roundedRectWidth}
              y={rectY + radius}
            />
            <quadraticCurveTo
              cpX={rectX + roundedRectWidth}
              cpY={rectY}
              x={rectX + roundedRectWidth - radius}
              y={rectY}
            />
            <lineTo
              x={rectX + radius}
              y={rectY}
            />
            <quadraticCurveTo
              cpX={rectX}
              cpY={rectY}
              x={rectX}
              y={rectY + radius}
            />
          </shape>);
        }
