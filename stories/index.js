import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ProgressBar from '../src/components/ProgressBar';
import TextInput from '../src/components/TextInput';
import EyeIcon from '../src/components/EyeIcon'
import PasswordInputExampleAllFeatures from './Examples/PasswordInput/PasswordInputExampleAllFeatures';

storiesOf('ProgressBar', module)
  .add('20 percent', () => (
    <ProgressBar percent={20}></ProgressBar>
  ))
  .add('60 percent', () => (
    <ProgressBar percent={60}></ProgressBar>
  ))
  .add('100 percent', () => (
    <ProgressBar percent={100}></ProgressBar>
  ))

storiesOf('TextInput', module)
  .add('with minimal features enabled', () => (
    <TextInput name="firstname" value="dur" label="First Name" onChange={() => {}}></TextInput>
  ))
  .add('with required field', () => (
    <TextInput name="firstname" label="First Name" onChange={() => {}} required></TextInput>
  ))
  .add('with error', () => (
    <TextInput name="firstname" label="First Name" onChange={() => {}} required error="First name is required."></TextInput>
  ))
  .add('with placeholder', () => (
    <TextInput name="firstname" label="First Name" onChange={() => {}} placeholder="First name"></TextInput>
  ))

storiesOf('EyeIcon', module)
  .add('displays', () => (
    <EyeIcon />
  ))

storiesOf('PasswordInput', module)
  .add('All features enabled', () => (
    <PasswordInputExampleAllFeatures />
  ))
