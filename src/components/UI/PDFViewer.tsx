'use client';

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Box, CircularProgress, IconButton, Typography } from '@mui/material';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// Configurar worker de PDF.js
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('Error loading PDF:', error);
    setError('Error al cargar el PDF. Por favor, intenta descargar el archivo.');
    setLoading(false);
  };

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages || 1));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Controles de navegación */}
      {!loading && !error && numPages && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            py: 2,
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          <IconButton
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            sx={{
              color: '#0a1623',
              '&:disabled': { color: '#ccc' },
            }}
          >
            <MdChevronLeft size={24} />
          </IconButton>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              color: '#0a1623',
              minWidth: '120px',
              textAlign: 'center',
            }}
          >
            Página {pageNumber} de {numPages}
          </Typography>
          <IconButton
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            sx={{
              color: '#0a1623',
              '&:disabled': { color: '#ccc' },
            }}
          >
            <MdChevronRight size={24} />
          </IconButton>
        </Box>
      )}

      {/* Visor de PDF */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'auto',
          p: 2,
        }}
      >
        {loading && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <CircularProgress size={60} sx={{ color: '#00bed6' }} />
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Montserrat, sans-serif',
                color: '#666',
              }}
            >
              Cargando PDF...
            </Typography>
          </Box>
        )}

        {error && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              p: 4,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Montserrat, sans-serif',
                color: '#d32f2f',
                fontWeight: 600,
              }}
            >
              Error al cargar el PDF
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Montserrat, sans-serif',
                color: '#666',
              }}
            >
              {error}
            </Typography>
          </Box>
        )}

        {!error && (
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={null}
            error={null}
            options={{
              cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
              cMapPacked: true,
              standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
            }}
          >
            <Page
              pageNumber={pageNumber}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              loading={
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '600px',
                  }}
                >
                  <CircularProgress size={40} sx={{ color: '#00bed6' }} />
                </Box>
              }
              width={Math.min(window.innerWidth * 0.9, 900)}
            />
          </Document>
        )}
      </Box>
    </Box>
  );
};

export default PDFViewer;
