"use client";
import { Card, AreaChart, Title, Text, LineChart } from "@tremor/react";

// const data = [
//   {
//     Month: "Jan 1",
//     Revenue: 10000,
//     Expenses: 50000,
//   },
//   {
//     Month: "Feb 1",
//     Revenue: 10000,
//     Expenses: 30000,
//   },
//   {
//     Month: "Mar 1",
//     Revenue: 20000,
//     Expenses: 20000,
//   },
//   {
//     Month: "Apr 1",
//     Revenue: 50000,
//     Expenses: 25000,
//   },
//   {
//     Month: "May 1",
//     Revenue: 70000,
//     Expenses: 50000,
//   },
//   {
//     Month: "Jun 1",
//     Revenue: 120000,
//     Expenses: 90000,
//   },
//   {
//     Month: "Jul 1",
//     Revenue: 200000,
//     Expenses: 90000,
//   },
//   {
//     Month: "Aug 1",
//     Revenue: 400000,
//     Expenses: 500000,
//   },
//   {
//     Month: "Sep 1",
//     Revenue: 700000,
//     Expenses: 550000,
//   },
//   {
//     Month: "Oct 1",
//     Revenue: 1000000,
//     Expenses: 1100000,
//   },
//   {
//     Month: "Nov 1",
//     Revenue: 1200000,
//     Expenses: 900000,
//   },
//   {
//     Month: "Dec 1",
//     Revenue: 1300000,
//     Expenses: 1100000,
//   },
// ];

const data = [
  { Dimension: "Price", companyA: 0, companyB: 1, companyC: 2 },
  { Dimension: "Speed", companyA: 2, companyB: 0, companyC: 1 },
  { Dimension: "Convenience", companyA: 0, companyB: 2, companyC: 0 },
  { Dimension: "Community Size", companyA: 1, companyB: 2, companyC: 0 },
];

const valueFormatter = (number) =>
  `${Intl.NumberFormat("us")
    .format(number + 1)
    .toString()}`;

export default function Example() {
  return (
    <Card>
      <Title>Performance</Title>
      <Text>Comparison between Revenue and Expenses</Text>
      <LineChart
        className="mt-4 h-80"
        data={data}
        categories={["companyA", "companyB", "companyC"]}
        index="Dimension"
        colors={["red", "green", "blue"]}
        yAxisWidth={60}
        valueFormatter={valueFormatter}
        showYAxis={false}
      />
    </Card>
  );
}
