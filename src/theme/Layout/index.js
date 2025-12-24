import React from 'react';
import Layout from '@theme-original/Layout';
import FloatingRAGChat from '@site/src/components/FloatingRAGChat';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <FloatingRAGChat />
    </>
  );
}