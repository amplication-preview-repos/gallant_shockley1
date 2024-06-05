import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { BudgetTitle } from "../budget/BudgetTitle";

export const HrInitiativeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="budget.id" reference="Budget" label="Budget">
          <SelectInput optionText={BudgetTitle} />
        </ReferenceInput>
        <NumberInput label="Cost" source="cost" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
