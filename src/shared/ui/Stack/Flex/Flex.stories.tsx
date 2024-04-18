import { Flex } from '../Flex/Flex';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'shared/Stack/Flex',
  component: Flex
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    direction: 'row',
    children: (
      <>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
      </>
    )
  }
};

export const RowGap4: Story = {
  args: {
    direction: 'row',
    gap: '4',
    children: (
      <>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
      </>
    )
  }
};

export const RowGap8: Story = {
  args: {
    direction: 'row',
    gap: '8',
    children: (
      <>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
      </>
    )
  }
};

export const RowGap16: Story = {
  args: {
    direction: 'row',
    gap: '16',
    children: (
      <>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
      </>
    )
  }
};

export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
      </>
    )
  }
};

export const Column4: Story = {
  args: {
    direction: 'column',
    gap: '4',
    children: (
      <>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
      </>
    )
  }
};

export const Column8: Story = {
  args: {
    direction: 'column',
    gap: '8',
    children: (
      <>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
      </>
    )
  }
};

export const Column16: Story = {
  args: {
    direction: 'column',
    gap: '16',
    children: (
      <>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
      </>
    )
  }
};

export const ColumnAlignEnd: Story = {
  args: {
    direction: 'column',
    align: 'end',
    children: (
      <>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
        <div>5555</div>
      </>
    )
  }
};
