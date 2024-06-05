import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { BudgetTitle } from "../budget/BudgetTitle";

export const HrInitiativeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="budget.id" reference="Budget" label="Budget">
          <SelectInput optionText={BudgetTitle} />
        </ReferenceInput>
        <NumberInput label="Cost" source="cost" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
