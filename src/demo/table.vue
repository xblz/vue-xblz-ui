<template>
  <xblz-table :data="data" :colNumber="colNumber"></xblz-table>
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
