import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="A-dro" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of a word guessing game using Cornish Standard Written Form. 
<br /><a href="https://github.com/gcrichton/gerdle"  className="underline font-bold"
>Gerdle</a>
<br />Based on {' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          Reactle        </a>{' '}
      </p>
    </BaseModal>
  )
}
