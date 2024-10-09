import type { NextPage, NextPageContext } from 'next';
import Error, { type ErrorProps } from 'next/error';

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
  return <Error statusCode={statusCode} />;
};

ErrorPage.getInitialProps = async (contextData: NextPageContext) => {
  return Error.getInitialProps(contextData);
};

export default ErrorPage;
