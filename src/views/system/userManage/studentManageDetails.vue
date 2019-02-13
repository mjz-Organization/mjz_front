<template>
    <div class="merchantManageStyle">
		<div>
			<el-button type="primary" icon="el-icon-back" @click="backPage">返回</el-button>
		</div>
        <el-row>
         	<el-col :span="24">
				<div class="grid-content bg-purple-dark">
					学生用户详情
				</div>
			</el-col>
        </el-row>
        <el-row>
			<el-col :span="12">
				<div class="grid-content">
					<el-form ref="manage" :model="manage" label-width="40%">
						<el-form-item label="用户名" >
							<span class="mylabel">{{ manage.address }}</span>
						</el-form-item>
						<el-form-item label="真实姓名" >
							<span class="mylabel">{{ manage.address }}</span>
						</el-form-item>
						<el-form-item label="生日" >
							<span class="mylabel">{{ manage.address }}</span>
						</el-form-item>
						<el-form-item label="身高" >
							<span class="mylabel">{{ manage.address }}</span>
						</el-form-item>
						<el-form-item label="身份证号" >
							<span class="mylabel">{{ manage.address }}</span>
						</el-form-item>
						<el-form-item label="居住地址" >
							<span class="mylabel">{{ manage.address }}</span>
						</el-form-item>
						<el-form-item label="所在学校" >
							<span class="mylabel">{{ manage.address }}</span>
						</el-form-item>
						<el-form-item label="专业" >
							<span class="mylabel">{{ manage.address }}</span>
						</el-form-item>
						<el-form-item label="联系方式" >
							<span class="mylabel">{{ manage.address }}</span>
						</el-form-item>
					</el-form>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<el-form ref="manage" :model="manage" label-width="25%" label-position="left">
						<el-form-item label="自我介绍" >
							<el-input 
								type="textarea" 
								v-model="manage.address" 
								:autosize="{ minRows: 2, maxRows: 6}"
								>
							</el-input>
						</el-form-item>
						<el-form-item label="身份证正面图" >
							<span class="mylabel">
								<img :src="manage.address" alt="">
							</span>
						</el-form-item>
						<el-form-item label="身份证反面图" >
							<span class="mylabel">
								<img :src="manage.address" alt="">
							</span>
						</el-form-item>
						<el-form-item label="手持身份证图" >
							<span class="mylabel">
								<img :src="manage.address" alt="">
							</span>
						</el-form-item>
					</el-form>
				</div>
			</el-col>
        </el-row>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        manage: {
			address:"xxx"
		}
      }
	},
	methods:{
		backPage(){
        	this.$router.push({path: ApiPath.system.studentManage});
    	}
	}
  }
</script>

<style scoped>
	.merchantManageStyle{
		margin: 50px 80px 0;
	}
	.bg-purple-dark {
		color: #009900;
		font-weight: 500;
		text-align: center;
		border-bottom: 2px solid #aaa;
		margin-bottom: 15px;
	}
	.el-form-item {
		margin-bottom: 0px !important;
	}
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.mylabel{
		margin-left:20px;
	}
</style>
