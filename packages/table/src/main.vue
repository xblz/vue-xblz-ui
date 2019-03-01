<template>
  <table
    class="xblz-table"
    :style="{
      'border-color': tableLineColor
    }"
    rules="all"
    frame="box"
    ref="xblz-table"
  >
    <tbody>
      <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
        <template v-for="(colData, colIndex) in rowData">
          <td
            v-bind:key="'label' + rowIndex + colIndex"
            :style="{
              color: labelFontColor,
              background: labelBgColor,
              'text-align': labelAlign,
              width: tableLabelWidth + 'px'
            }"
          >
            {{ colData[labelProp] || colData.label }}
          </td>
          <td
            v-bind:key="'content' + rowIndex + colIndex"
            :style="{
              color: contentFontColor,
              background: contentBgColor,
              'text-align': contentAlign,
              width: tableContentWidth + 'px'
            }"
          >
            {{ colData[contentProp] || colData.content }}
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script type="text/babel">
export default {
  name: 'xblz-table',
  props: {
    // 展示数据
    data: { type: Array, default: () => [] },
    // 行展示列数，默认：4
    colCount: { type: Number, default: 4 },
    // 表格分隔线颜色，默认：#e8e8e8
    tableLineColor: { type: String, default: '#e8e8e8' },

    // label取值字段，默认：label
    labelProp: { type: String, default: 'label' },
    // label文字颜色，默认：#666666
    labelFontColor: { type: String, default: '#666666' },
    // label背景色，默认：#e9f7fe
    labelBgColor: { type: String, default: '#e9f7fe' },
    // label内容位置，可选值left、center、right，默认：center
    labelAlign: { type: String, default: 'center' },
    // label宽度，可选单位px、%，默认：120px
    labelWidth: { type: String, default: '120px' },

    // content取值字段，默认：label
    contentProp: { type: String, default: 'content' },
    // content文字颜色，默认：#666666
    contentFontColor: { type: String, default: '#666666' },
    // 文字label背景色，默认：#ffffff
    contentBgColor: { type: String, default: '#ffffff' },
    // 文字text内容位置，可选值left、center、right，默认：center
    contentAlign: { type: String, default: 'center' }
  },
  computed: {
    tableData() {
      let data = [];
      let dataIndex = 0;

      for (let index in this.data) {
        dataIndex = Math.floor(index / this.colCount);
        if (!data[dataIndex]) {
          data.push(data);
          data[dataIndex] = [];
        }
        data[dataIndex].push(this.data[index]);
      }

      return data;
    },
    tableLabelWidth() {
      if (!this.isMounted) {
        return 0;
      } else {
        if (this.labelWidth.indexOf('px') !== -1) {
          return Number(this.labelWidth.replace('px', ''));
        } else {
          return (
            (this.$refs['xblz-table'].offsetWidth / this.colCount / 100) * Number(this.labelWidth.replace('%', ''))
          );
        }
      }
    },
    tableContentWidth() {
      if (!this.isMounted) {
        return 0;
      } else {
        return this.$refs['xblz-table'].offsetWidth / this.colCount - this.tableLabelWidth;
      }
    }
  },
  data() {
    return {
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.xblz-table {
  width: 100%;

  tr {
    td {
      padding: 4px 8px;
      cursor: default;

      &:nth-child(2n) {
        cursor: pointer;

        &:hover {
          background: #e9f7fe !important;
        }
      }
    }
  }
}
</style>
