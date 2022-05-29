import pdf from '@src/assets/images/icons/file-icons/pdf.png'
import { Input, FormGroup } from 'reactstrap'
export const basicData = [
  {
    title: 'Read Import',
    content: 'To get started, click here to read the instructions on how to import voters.'
  },
  {
    title: 'Download the import template',
    content: 'click here to download the voter import template and add one voter per row.The colums in your spredsheet must exactly match the import template or the import will fail'
   
  },
  {
    title: 'Select the import file from your computer',
    customContent: (
      <FormGroup>
              <Input type='file' />
            </FormGroup>
    )
  }
]