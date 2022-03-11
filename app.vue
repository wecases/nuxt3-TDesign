<template>
  <div>
    <Button theme="primary" variant="base"> 填充按钮 </Button>
    <Steps :default-current="1">
      <StepItem title="已完成的步骤" />
      <StepItem title="进行中的步骤" />
      <StepItem title="未进行的步骤" />
      <StepItem title="未进行的步骤" />
    </Steps>
    <!-- <NuxtWelcome /> -->
  </div>
</template>
<script setup>
import { Button } from 'tdesign-vue-next'
import { Steps, StepItem } from 'tdesign-vue-next/es/steps/index'
</script>
