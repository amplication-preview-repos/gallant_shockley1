import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const EmployeeBenefitsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="BenefitType" source="benefitType" />
        <NumberInput label="Cost" source="cost" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="EmployeeName" source="employeeName" />
      </SimpleForm>
    </Edit>
  );
};
