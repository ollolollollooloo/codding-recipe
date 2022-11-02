import * as React from 'react';
import type { NextPage } from 'next'
import Wizard from '../components/Wizard'
import TutorialsList from '../components/TutorialsList'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const fetabs = ['OS', 'Framework', 'State Management', 'Programming Language', 'Package Installation Process', 'Framework in a framework', 'Bundler', 'Containerized', 'Unit Testing', 'CSS Framework','Repository']

const festack:any = {
  os: ['windows10', 'macm1', 'ubuntu20'],
  framework: ['reactjs', 'vuejs', 'angularjs'],
  state_management: ['recoil', 'jotai', 'redux', 'rematch', 'zustand', 'none'],
  // https://blog.openreplay.com/top-6-react-state-management-libraries-for-2022/
  programming_language: ['typescript', 'js'],
  package_installation_process: ['npm', 'yarn'],
  framework_in_a_framework: ['nextjs', 'nuxtjs', 'none'],
  bundler: ['webpack', 'gulp', 'none'],
  containerized: ['docker', 'none'],
  unit_testing: ['jest', 'none'],
  css_framework: ['mui', 'getbootstrap', 'tailwindcss', 'skeleton', 'bulma', 'materializecss', 'materialize design lite', 'foundation', 'ant design', 'semantic ui', 'ui kit', 'none'],
  // https://dev.to/theme_selection/best-css-frameworks-in-2020-1jjh
  repository: ['github', 'gitlab', 'bitbucket', 'awscodecommit'],
}

const festabs = ['Server', 'IaaS', 'CI CD']

const fesstack:any = {
  server: ['awsec2'],
  iaas: ['terraform', 'cloudformation'],
  ci_cd: ['githubactions', 'gitlabcicd', 'jenkins', 'bitbucketpipelines', 'AWS code pipeline'],
}



const Permute: NextPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{paddingTop:30, paddingBottom:30}}>
        <Grid container spacing={2}>
          <Grid xs={12} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Frontend: Craft your tutorial
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Permute
