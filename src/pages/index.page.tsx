import { Button } from '@nextui-org/button';
import { Card } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Input } from '@nextui-org/input';
import { NextSeo } from 'next-seo';
import { useState, type ReactElement } from 'react';
import { useForm, type Resolver } from 'react-hook-form';
import { calculateAbjad, calculateType, calculateXTypeNum, calculateYTypeNum, formatNum } from '~helpers';
import { FullscreenLayout } from '~layouts';

type FormValues = {
  motherName: string;
  yourName: string;
};

type CalculatedName = {
  name: string;
  x: number;
  y: number;
  xType: number;
  yType: number;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.motherName && values.yourName ? values : {},
    errors:
      !values.motherName || !values.yourName
        ? {
            motherName: {
              type: 'required',
              message: 'This is required.'
            },
            yourName: {
              type: 'required',
              message: 'This is required.'
            }
          }
        : {}
  };
};

const IndexPage = () => {
  const [calculatedNames, setCalculatedNames] = useState<CalculatedName[]>([]);
  const { register, handleSubmit, formState } = useForm<FormValues>({ resolver });

  const onSubmit = handleSubmit(({ motherName, yourName }) => {
    const motherNameAbjad = calculateAbjad(motherName);
    const yourNameAbjad = calculateAbjad(yourName);
    const x = (motherNameAbjad + yourNameAbjad) / 4;
    const y = (motherNameAbjad + yourNameAbjad) / 3;

    setCalculatedNames((prev) => {
      return [...prev, { name: yourName, x, y, yType: calculateYTypeNum(y), xType: calculateXTypeNum(x) }];
    });
  });

  return (
    <div className="flex h-svh w-svw place-content-center place-items-center">
      <NextSeo title="Calculate" />
      <Card classNames={{ base: 'max-w-md grow p-5' }}>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-2">
          <Input
            {...register('motherName')}
            label="اسم مادر"
            fullWidth={false}
            placeholder="زرین"
          />
          <Input
            {...register('yourName')}
            label="اسم خودت"
            placeholder="مهتاب"
          />
          <Button
            type="submit"
            fullWidth
            isDisabled={!formState.isValid}
            color="primary"
            variant="shadow">
            محاسبه
          </Button>
        </form>
        <div className="mt-10 flex flex-wrap gap-4">
          {calculatedNames.map((name) => {
            return (
              <div
                key={name.name}
                className="flex items-center gap-2">
                {name.name}
                <Chip
                  variant="flat"
                  size="sm"
                  color="success">
                  {calculateType(name.xType)} / {formatNum(name.x)}
                </Chip>
                <Chip
                  variant="flat"
                  size="sm"
                  color="danger">
                  {calculateType(name.yType)} / {formatNum(name.y)}
                </Chip>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

IndexPage.getLayout = (page: ReactElement) => {
  return <FullscreenLayout>{page}</FullscreenLayout>;
};

export default IndexPage;
