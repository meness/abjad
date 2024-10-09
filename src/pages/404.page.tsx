import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import type { ReactElement } from 'react';
import { routeConst } from '~common/consts';
import { FullscreenLayout } from '~layouts';

const NotFoundPage = () => {
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-svh w-svw place-content-center place-items-center">
      <NextSeo
        title="Page Not Found"
        noindex
      />
      <Card
        classNames={{
          footer: 'justify-center',
          base: 'gap-10 w-full max-w-5xl',
          body: 'text-center',
          header: 'text-3xl flex justify-center font-bold'
        }}>
        <CardHeader>Page Not Found</CardHeader>
        <CardBody>Sorry, this page leads you no where!</CardBody>
        <CardFooter>
          <Button
            as={Link}
            size="lg"
            href={routeConst.index}
            color="primary"
            className="w-full max-w-xs"
            variant="shadow">
            Back Home
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

NotFoundPage.getLayout = (page: ReactElement) => {
  return <FullscreenLayout>{page}</FullscreenLayout>;
};

export default NotFoundPage;
