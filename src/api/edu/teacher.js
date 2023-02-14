import request from '@/utils/request'
//定义接口地址
export default {
  //1、讲师列表（查询查询分页）
  getTeacherListPage(current, limit, teacherQuery) {
    return request({
      url: `/eduservice/teacher/pageListTeacherCondition/${current}/${limit}`,
      method: 'post',
      data: teacherQuery
    })
  },

  //2、删除讲师
  deleteTeacherId(id) {
    return request({
      url: `/eduservice/teacher/${id}`,
      method: 'delete',

    })
  },
  //3、添加讲师
  addTeacher(teacher) {
    return request({
      url: `/eduservice/teacher/addTeacher`,
      method: 'post',
      data: teacher
    })
  },
  //4、根据ID查询讲师
  getTeacherInfo(id) {
    return request({
      url: `/eduservice/teacher/getTeacher/${id}`,
      method: 'get',
    })
  },
  //8、 修改讲师
  updateTeacherInfo(teacher) {
    return request({
      url: `/eduservice/teacher/updateTeacher`,
      method: 'post',
      data: teacher
    })
  }
}
