import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BUDGET_TITLE_FIELD } from "./BudgetTitle";

export const BudgetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Department" source="department" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Year" source="year" />
        <ReferenceManyField
          reference="HrInitiative"
          target="budgetId"
          label="HRInitiatives"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Budget"
              source="budget.id"
              reference="Budget"
            >
              <TextField source={BUDGET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Cost" source="cost" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
