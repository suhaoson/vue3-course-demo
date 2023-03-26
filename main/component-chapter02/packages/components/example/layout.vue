<template>
  <Layout class="example">
    <Header class="example-header">Header</Header>
    <Content class="example-content">Content</Content>
    <Footer class="example-footer">Footer</Footer>
  </Layout>
</template>

<script setup lang="ts">
import { Layout, Header, Footer, Content } from "../src";
</script>

<style lang="less">
.example {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 24px;
  color: #02290a;
  text-align: center;
}

.example-header {
  background: #00968880;
  height: 40px;
  justify-content: center;
  align-items: center;
}

.example-content {
  background: #007a6ec0;
  height: 100px;
  justify-content: center;
  align-items: center;
}

.example-footer {
  background: #00968880;
  height: 40px;
  justify-content: center;
  align-items: center;
}

.example-sider {
  background: #106d64d6;
  width: 200px;
  justify-content: center;
  align-items: center;
}
</style>
