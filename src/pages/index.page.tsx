import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Input } from '@nextui-org/input';
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/table';
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

const columns = [
  {
    key: 'name',
    label: 'اسم'
  },
  {
    key: 'x',
    label: 'X'
  },
  {
    key: 'y',
    label: 'Y'
  }
];

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

    if (
      calculatedNames.some((name) => {
        return name.name.toLowerCase() === yourName.toLowerCase();
      })
    ) {
      return;
    }

    const x = (motherNameAbjad + yourNameAbjad) / 4;
    const y = (motherNameAbjad + yourNameAbjad) / 3;

    setCalculatedNames((prev) => {
      return [...prev, { name: yourName, x, y, yType: calculateYTypeNum(y), xType: calculateXTypeNum(x) }];
    });
  });

  return (
    <div className="my-10 flex flex-col place-content-center place-items-center gap-6">
      <NextSeo title="محاسبه" />
      <Card
        fullWidth
        classNames={{ base: 'max-w-2xl' }}>
        <CardHeader>محاسبه ابجد</CardHeader>
        <CardBody>
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
        </CardBody>
      </Card>
      <Card
        fullWidth
        classNames={{ base: 'max-w-2xl' }}>
        <CardHeader>اسامی محاسبه‌شده</CardHeader>
        <CardBody>
          <Table shadow="none" isStriped removeWrapper>
            <TableHeader columns={columns}>
              {(column) => {
                return <TableColumn key={column.key}>{column.label}</TableColumn>;
              }}
            </TableHeader>
            <TableBody
              emptyContent="هنوز اسمی محاسبه نکردید!"
              items={calculatedNames}>
              {(item) => {
                return (
                  <TableRow key={item.name}>
                    {(columnKey) => {
                      if (columnKey === 'x') {
                        return (
                          <TableCell>
                            <Chip
                              variant="flat"
                              color="success">
                              {calculateType(item.xType)} / {formatNum(item.x)}
                            </Chip>
                          </TableCell>
                        );
                      }

                      if (columnKey === 'y') {
                        return (
                          <TableCell>
                            <Chip
                              variant="flat"
                              color="danger">
                              {calculateType(item.yType)} / {formatNum(item.y)}
                            </Chip>
                          </TableCell>
                        );
                      }

                      return <TableCell>{getKeyValue(item, columnKey)}</TableCell>;
                    }}
                  </TableRow>
                );
              }}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

IndexPage.getLayout = (page: ReactElement) => {
  return <FullscreenLayout>{page}</FullscreenLayout>;
};

export default IndexPage;
