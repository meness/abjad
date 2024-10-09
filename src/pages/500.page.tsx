import { Link } from '@nextui-org/link';
import { NextSeo } from 'next-seo';
import { routeConst } from '~common/consts';

const InternalServerErrorPage = () => {
  return (
    <>
      <NextSeo
        title="500"
        noindex
      />
      <div>
        <div className="grid grid-flow-row gap-12">
          <div>
            <h1>500</h1>
            <p>500</p>
          </div>

          <Link href={routeConst.index}>Back home</Link>
        </div>
      </div>
    </>
  );
};

export default InternalServerErrorPage;
