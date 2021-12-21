<template>
  <view></view>
</template>

<script>
import {
  getAdminList,
  changeAdminStatus,
  getRole,
  resetPassword,
  deleteAdmin,
} from "@/api/account";
import editDialog from "./editDialog";
export default {
  name: "list",
  components: {
    editDialog,
  },
  data() {
    return {
      loading: false,
      method: "getAdminList",
      tableData: [],
      //..
      form: {},
    };
  },
  watch: {},
  methods: {
    getParams() {
      return {
        role: this.role,
        name: this.name,
        status: this.status,
        start: (this.PAGINATION.currentPage - 1) * this.PAGINATION.pageSize,
        range: this.PAGINATION.pageSize,
      };
    },
    async getAdminList() {
      this.loading = true;
      let res = await getAdminList(this.queryParams);
      this.tableData = res.data.list;
      this.PAGINATION.total = res.data.count;
      this.loading = false;
    },
    async deleteAdmin() {
      try {
        let res = await deleteAdmin(this.id);
        this.$message({
          type: "success",
          message: "删除成功",
        });
        this.getAdminList();
      } catch (err) {
        this.$message({
          type: "error",
          message: err.msg,
        });
      }
    },
    addParams() {
      let {
        role,
        username,
        name,
        password,
        gender,
        profession,
        education,
        signature,
      } = this.form;
      return {
        role,
        username,
        name,
        password,
        gender,
        profession,
        education,
        signature,
      };
    },
    async register() {
      try {
        let res = await register({ ...this.addParams() });
        this.$message({
          type: "success",
          message: "添加成功",
        });
        this.dialogFormVisible = false;
        this.$emit("listen");
      } catch (err) {
        this.$message({
          type: "error",
          message: err.msg,
        });
      }
    },
  },
};
</script>