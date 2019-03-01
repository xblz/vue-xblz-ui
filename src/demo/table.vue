<template>
  <xt-ps-table :data="data" :colNumber="colNumber"></xt-ps-table>
</template>

<script>
import tableData from '../mock/table';

export default {
  data() {
    return {
      data: tableData,
      colNumber: 3
    };
  }
};
</script>
