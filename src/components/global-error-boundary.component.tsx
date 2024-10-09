import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { motion } from 'framer-motion';
import { Component, type ReactNode } from 'react';
import { routeConst } from '~common/consts';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI
    // eslint-disable-next-line no-console
    console.error(error);

    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    // You can use your own error logging service here
    // eslint-disable-next-line no-console
    console.error(error);
  }

  handleOnClick() {
    this.setState({ hasError: false });
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <motion.div
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex h-svh w-svw place-content-center place-items-center">
          <Card
            classNames={{
              footer: 'justify-center gap-4',
              base: 'gap-10 max-w-5xl bg-foreground-500',
              body: 'text-center flex flex-col gap-3',
              header: 'text-3xl flex justify-center font-bold'
            }}>
            <CardHeader>Something Happened</CardHeader>
            <CardBody>
              <p>Sorry, something weird happened.</p>
              <p className="text-sm">
                This page shows to you only if you run the app using{' '}
                <Snippet
                  hideCopyButton
                  size="sm"
                  hideSymbol>
                  bun dev
                </Snippet>
              </p>
            </CardBody>
            <CardFooter>
              <Button
                color="primary"
                fullWidth
                size="lg"
                variant="shadow"
                onPress={this.handleOnClick}>
                Try Again
              </Button>
              <Button
                as={Link}
                size="lg"
                href={routeConst.index}
                color="default"
                fullWidth
                variant="ghost">
                Back Home
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}
