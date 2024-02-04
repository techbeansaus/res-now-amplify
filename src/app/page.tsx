'use client';
import Image from 'next/image'
import styles from './page.module.css'
import {
  RESERVATIONSCreateForm 
 } from '../ui-components';
 import { AmplifyProvider, ThemeProvider, createTheme } from "@aws-amplify/ui-react";
 import { studioTheme } from '../ui-components';
 import awsconfig from "../aws-exports";
 import {Amplify} from "aws-amplify";
 Amplify.configure(awsconfig);
import '@aws-amplify/ui-react/styles.css'
export default function Home() {
  return (
    <AmplifyProvider theme={studioTheme}>
  <RESERVATIONSCreateForm width="50%"/>
      </AmplifyProvider>
  
  )
}
