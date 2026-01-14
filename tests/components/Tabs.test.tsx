import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '../../src/components/Tabs';

describe('Tabs', () => {
  it('renders tabs and initial content', () => {
    render(
      <Tabs defaultValue="1">
        <TabList>
          <Tab value="1">Tab 1</Tab>
          <Tab value="2">Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="1">Content 1</TabPanel>
          <TabPanel value="2">Content 2</TabPanel>
        </TabPanels>
      </Tabs>
    );
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeVisible();
  });

  it('switches tabs on click', () => {
    render(
      <Tabs defaultValue="1">
        <TabList>
          <Tab value="1">Tab 1</Tab>
          <Tab value="2">Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="1">Content 1</TabPanel>
          <TabPanel value="2">Content 2</TabPanel>
        </TabPanels>
      </Tabs>
    );

    fireEvent.click(screen.getByText('Tab 2'));

    expect(screen.getByText('Content 2')).toBeVisible();
    expect(screen.getByText('Content 1')).not.toBeVisible();
  });

  it('handles disabled tabs', () => {
    render(
      <Tabs defaultValue="1">
        <TabList>
          <Tab value="1">Tab 1</Tab>
          <Tab value="disabled" disabled>Disabled</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="1">C1</TabPanel>
          <TabPanel value="disabled">C2</TabPanel>
        </TabPanels>
      </Tabs>
    );

    const disabledTab = screen.getByText('Disabled');
    fireEvent.click(disabledTab);
    expect(screen.getByText('C1')).toBeVisible();
    expect(screen.queryByText('C2')).not.toBeVisible();
  });
});
