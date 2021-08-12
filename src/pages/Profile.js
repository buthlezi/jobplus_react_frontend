import React from 'react'
import Controls from '../components/controls/Controls';
import Form from '../components/Form';
import PageTitle from '../components/PageTitle';
import PaperForm from '../components/PaperForm';

export default function Profile() {
  const sectors = [
    {name: 'Technology'},
    {name: 'Engineering'},
    {name: 'Healthcare'},
  ];
  return (
    <>
      <PageTitle title="Profile" />
      <PaperForm>
        <Form>
          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color="primary" label="Desired job title" />
            <Controls.TextFieldCustom placeholder="Desired job title" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color="primary" label="Min per annum salary" />
            <Controls.TextFieldCustom placeholder="Min per annum salary" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color="primary" label="Job type" />
            <Controls.CheckboxCustom value="Permamanent" />
            <Controls.CheckboxCustom value="Temporary" />
            <Controls.CheckboxCustom value="Contract" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Sector" />
            <Controls.SelectCustom items={sectors} />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Experience" />
            <Controls.TextareaCustom placeholder="Experience" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>      
            <Controls.ButtonCustom text="Submit" />
          </Controls.FormGroupCustom>
        </Form>
      </PaperForm>
    </>
  )
}
