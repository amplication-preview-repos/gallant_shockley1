import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PayrollEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="EmployeeName" source="employeeName" />
        <DateTimeInput label="PaidDate" source="paidDate" />
      </SimpleForm>
    </Edit>
  );
};
