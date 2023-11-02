"use client";

import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import {
  Card,
  NumberInput,
  Title,
  Subtitle,
  BarChart,
  BarList,
  Flex,
  Bold,
  Text,
  Italic,
} from "@tremor/react";
import { useState } from "react";

const valueFormatter = (number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const profitFirstAllocation = [
  {
    min: 0,
    max: 250000,
    profit: 0.05,
    ownersPay: 0.5,
    tax: 0.15,
    operatingExpense: 0.3,
  },
  {
    min: 250000,
    max: 500000,
    profit: 0.1,
    ownersPay: 0.35,
    tax: 0.15,
    operatingExpense: 0.4,
  },
  {
    min: 500000,
    max: 1000000,
    profit: 0.15,
    ownersPay: 0.2,
    tax: 0.15,
    operatingExpense: 0.5,
  },
  {
    min: 1000000,
    max: 5000000,
    profit: 0.1,
    ownersPay: 0.1,
    tax: 0.15,
    operatingExpense: 0.65,
  },
  {
    min: 5000000,
    max: 10000000,
    profit: 0.15,
    ownersPay: 0.05,
    tax: 0.15,
    operatingExpense: 0.65,
  },
  {
    min: 10000000,
    max: 50000000,
    profit: 0.2,
    ownersPay: 0.01,
    tax: 0.15,
    operatingExpense: 0.65,
  },
  {
    min: 50000000,
    max: Infinity,
    profit: 0.25,
    ownersPay: 0,
    tax: 0.15,
    operatingExpense: 0.6,
  },
];

export default function WageCalculator() {
  const [revenue, setRevenue] = useState();

  const revenueAllocation = profitFirstAllocation.find(
    (targets) => revenue >= targets.min && revenue < targets.max
  );

  const chartData = revenueAllocation
    ? [
        {
          name: "Profit",
          value: revenue * revenueAllocation.profit,
        },
        {
          name: "Owners Pay",
          value: revenue * revenueAllocation.ownersPay,
        },
        {
          name: "Tax",
          value: revenue * revenueAllocation.tax,
        },
        {
          name: "Operating Expenses",
          value: revenue * revenueAllocation.operatingExpense,
        },
      ]
    : undefined;

  return (
    <Card decoration="top" decorationColor="blue">
      <Title>Revenue Allocation Calculator</Title>
      <Subtitle>
        This calculator uses the target allocation percentages (TAPs)
        recommended by Profit-First Accounting* to compute your unique revenue
        allocation.
      </Subtitle>
      <NumberInput
        icon={CurrencyDollarIcon}
        placeholder="Your yearly revenue..."
        step={10000}
        value={revenue}
        onChange={(e) => setRevenue(parseFloat(e.target.value))}
        className="mt-4"
        min={0}
      />
      {chartData && (
        <Flex className="mt-4">
          <Text>
            <Bold>Account</Bold>
          </Text>
          <Text>
            <Bold>Revenue</Bold>
          </Text>
        </Flex>
      )}
      <BarList
        className="mt-2"
        data={chartData}
        index="name"
        categories={["Revenue Allocation ($)"]}
        color="emerald"
        valueFormatter={valueFormatter}
        showAnimation={true}
      />
      {chartData && (
        <Text className="text-sm mt-4">
          *These allocations are a general guideline,{" "}
          <Bold>not a one-size fits all solution</Bold>. For example, if you
          provide a digital good your operating expenses may be lower and those
          dollars can be reallocated. Consider reading{" "}
          <Italic>Profit First</Italic> to understand target allocations better.
        </Text>
      )}
    </Card>
  );
}
