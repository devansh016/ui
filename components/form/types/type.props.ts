import {
  FormPublicDesignFragment,
  FormPublicFieldFragment,
} from '../../../graphql/fragment/form.public.fragment'

export interface FieldTypeProps {
  field: FormPublicFieldFragment
  design: FormPublicDesignFragment
  urlValue?: string
}
