import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PayrollCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="EmployeeName" source="employeeName" />
        <DateTimeInput label="PaidDate" source="paidDate" />
      </SimpleForm>
    </Create>
  );
};
