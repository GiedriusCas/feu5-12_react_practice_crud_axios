import styled from 'styled-components';

const Input = styled.input`
  font-size: 16px;
  padding: 8px 12px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
  border-radius: 4px;
  outline: none;

  &:focus {
    box-shadow: 0 0 5px ${(props) => (props.error ? 'red' : '#333')};
  }
`;

const TextArea = styled.textarea`
  font-size: 16px;
  padding: 8px 12px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
  border-radius: 4px;
  outline: none;

  &:focus {
    box-shadow: 0 0 5px ${(props) => (props.error ? 'red' : '#333')};
  }
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
`;

export const InputField = ({ label, error, ...rest }) => (
  <InputWrapper>
    <Label>{label}</Label>
    <Input error={error} placeholder={label} {...rest} />
    {error && <Error>{error}</Error>}
  </InputWrapper>
);

export const TextAreaField = ({ label, error, ...rest }) => (
  <InputWrapper>
    <Label>{label}</Label>
    <TextArea error={error} {...rest} />
    {error && <Error>{error}</Error>}
  </InputWrapper>
);
