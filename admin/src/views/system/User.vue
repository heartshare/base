<template>
  <wm-main>
    <!-- List -->
    <wm-table class="table" ref="Table" :data="page.list">
      <wm-table-title>
        <td>UID</td>
        <td>账号</td>
        <td>登录时间</td>
        <td>状态</td>
        <td>用户信息</td>
      </wm-table-title>
      <wm-table-tr v-for="(val,key) in page.list" :key="key" :value="val.uid">
        <td width="60">
          <wm-img width="40px" height="40px" radius="50%" icoSize="24px" :url="val.img" :title="val.uid"></wm-img>
        </td>
        <td width="160">
          <wm-popover type="top" effect="dark" width="180px">
            <template #body>
              <p>注册: {{ val.rtime || '无' }}</p>
              <p>更新: {{ val.utime || '无' }}</p>
            </template>
            <template #reference>
              <wm-tag size="medium">{{val.tel || val.email || val.uname}}</wm-tag>
            </template>
          </wm-popover>
        </td>
        <td width="160">{{val.ltime || '无'}}</td>
        <td width="70">
          <wm-switch :value="val.state" @update:value="setState($event,val.uid)"></wm-switch>
        </td>
        <td>
          <wm-button v-if="val.nickname" size="medium" @click="infoData(val)">{{val.nickname}}</wm-button>
          <wm-button v-else type="info" size="medium" @click="infoData(val)">添加</wm-button>
        </td>
      </wm-table-tr>
    </wm-table>
    <!-- List End -->
    <wm-page :page="page.page" :limit="page.limit" :total="page.total" @update:page="subPage"></wm-page>

    <!-- Sea -->
    <wm-dialog title="搜索" width="420px" :show="sea.show" @update:show="sea.show=$event">
      <wm-form class="form">
        <wm-form-item label="账号">
          <wm-input :value="sea.form.uname" @update:value="sea.form.uname=$event" maxlength="16" placeholder="用户名/手机号码/邮箱" />
        </wm-form-item>
      </wm-form>
      <template #footer>
        <wm-button @click="subSea()">搜 索</wm-button>
      </template>
    </wm-dialog>
    <!-- Sea End -->

    <!-- Add -->
    <wm-dialog title="添加" width="420px" :show="add.show" @update:show="add.show=$event">
      <wm-form class="form">
        <wm-form-item label="手机">
          <wm-input :value="add.form.tel" @update:value="add.form.tel=$event" maxlength="11" placeholder="输入手机号码" />
        </wm-form-item>
        <wm-form-item label="密码">
          <wm-input :value="add.form.passwd" @update:value="add.form.passwd=$event" maxlength="16" placeholder="默认密码" />
        </wm-form-item>
      </wm-form>
      <template #footer>
        <wm-button @click="subAdd()">添 加</wm-button>
      </template>
    </wm-dialog>
    <!-- Add End -->

    <!-- Edit -->
    <wm-dialog title="编辑" width="420px" :show="edit.show" @update:show="edit.show=$event">
      <wm-form class="form">
        <wm-form-item label="手机">
          <wm-input :value="edit.form.tel" @update:value="edit.form.tel=$event" maxlength="11" placeholder="输入手机号码" />
        </wm-form-item>
        <wm-form-item label="密码">
          <wm-input :value="edit.form.passwd" @update:value="edit.form.passwd=$event" maxlength="16" placeholder="重置密码" />
        </wm-form-item>
      </wm-form>
      <template #footer>
        <wm-button @click="subEdit()">保 存</wm-button>
      </template>
    </wm-dialog>
    <!-- Edit End -->

    <!-- Del -->
    <wm-dialog title="删除" width="320px" :show="del.show" @update:show="del.show=$event">
      <wm-row>是否删除已选择数据？</wm-row>
      <template #footer>
        <wm-button @click="subDel()">彻底删除</wm-button>
      </template>
    </wm-dialog>
    <!-- Del End -->

    <!-- Info -->
    <wm-dialog title="用户信息" width="420px" :show="info.show" @update:show="info.show=$event">
      <wm-form class="form">
        <wm-form-item label="昵称">
          <wm-input :value="info.form.nickname" @update:value="info.form.nickname=$event" maxlength="12" placeholder="用户昵称" />
        </wm-form-item>
        <wm-form-item label="姓名">
          <wm-input :value="info.form.name" @update:value="info.form.name=$event" maxlength="8" placeholder="填写姓名" />
        </wm-form-item>
        <wm-form-item label="性别">
          <wm-radio :data="gender" :value="info.form.gender" @update:value="info.form.gender=$event"></wm-radio>
        </wm-form-item>
        <wm-form-item label="生日">
          <wm-date :value="info.form.birthday" @update:value="info.form.birthday=$event"></wm-date>
        </wm-form-item>
        <wm-form-item label="职务">
          <wm-input :value="info.form.position" @update:value="info.form.position=$event" maxlength="8" placeholder="职务、职称" />
        </wm-form-item>
      </wm-form>
      <template #footer>
        <wm-button @click="subInfo()">更 新</wm-button>
      </template>
    </wm-dialog>
    <!-- Info End -->

  </wm-main>
</template>

<style scoped>
.table{min-width: 720px;}
.form{padding-right: 24px;}
</style>

<script src="./User.js"></script>
