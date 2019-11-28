import React, { Component, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/entry.webpack'


const PDFGeneration = () => {

  const [pageNumber, setPageNumber] = useState();

  return (

      <div>
        <Document
          file="somefile.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>

  )
  
  };

export default PDFGeneration;
