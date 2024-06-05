import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { HrInitiativeTitle } from "../hrInitiative/HrInitiativeTitle";

export const BudgetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Department" source="department" />
        <ReferenceArrayInput
          source="hrInitiatives"
          reference="HrInitiative"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HrInitiativeTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Year" source="year" />
      </SimpleForm>
    </Create>
  );
};
