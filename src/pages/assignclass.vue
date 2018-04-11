<template>
  <q-page padding>
    <h4>Assign Class</h4>
    <div class="row">
      <div class="col">
        <q-list highlight sparse separator link>
          <q-list-header>Classes/Groups</q-list-header>
          <q-item-separator />
          <q-item v-for="group in groups" :key="group.id" tag="label" @click.native="getStudents(group.id)">
            <q-item-side>
              <q-checkbox v-model="group.selected" readonly toggle-indeterminate true-value="2" indeterminate-value="1" false-value="0" />
            </q-item-side>
            <q-item-main :label="group.name" />
          </q-item>
        </q-list>
      </div>
      <div class="col">
        <!--<q-scroll-area style="height:100%">-->
          <q-list highlight sparse separator link>
            <q-list-header>Students</q-list-header>
            <q-item-separator />
            <q-item v-for="student in students" :key="student.id" tag="label" @click.native="toggleStudent(group.id)">
            <q-item-side>
              <q-checkbox v-model="student.selected" true-value="1" false-value="0" />
            </q-item-side>
              <q-item-main :label="student.name" />
            </q-item>
          </q-list>
        <!--</q-scroll-area>-->
      </div>
      <div class="col">
        <q-scroll-area>
        </q-scroll-area>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageAssign',
  data () {
    return {
      groups: [
        { id: 0, name: 'Class 1A', selected: '0' },
        { id: 1, name: 'Class 2B', selected: '0' },
        { id: 2, name: 'Class 3C', selected: '0' },
        { id: 3, name: 'Class 4D', selected: '0' },
        { id: 4, name: 'Class 5E', selected: '0' },
        { id: 5, name: 'Class 6F', selected: '0' }
      ],
      students: []
    }
  },
  computed: {
  },
  methods: {
    getStudents (groupid) {
      var vm = this
      var group = this.$_.find(this.groups, { 'id': groupid })
      this.students = []
      setTimeout(function () {
        if (group.selected === '0') {
          group.selected = '2'
        }
        vm.returnStudents()
      }, 1000)
    },
    returnStudents () {
      this.students = [
        { id: 0, name: 'Xiao Ming', selected: '1' },
        { id: 1, name: 'Xiao Le', selected: '1' },
        { id: 2, name: 'Ah Ren', selected: '1' },
        { id: 3, name: 'Joan Lim', selected: '1' },
        { id: 4, name: 'Christine Tan', selected: '1' },
        { id: 5, name: 'Sape Ben', selected: '1' },
        { id: 6, name: 'Gumon Kumon', selected: '1' },
        { id: 7, name: 'John Lee', selected: '1' },
        { id: 8, name: 'Noah Helm', selected: '1' },
        { id: 9, name: 'Zachary Mess', selected: '1' },
        { id: 10, name: 'Zhang Yi Yang', selected: '1' },
        { id: 11, name: 'Chen Daxi', selected: '1' },
        { id: 12, name: 'Julie Lie', selected: '1' },
        { id: 13, name: 'Wah Tat On', selected: '1' }
      ]
    },
    toggleStudent (groupid) {
      console.log('toggle')
      var group = this.$_.find(this.groups, { 'id': groupid })
      console.log(group)
      var selectAll = this.$_.find(this.students, { 'selected': 0 })
      if (selectAll.length !== this.students.length) {
        console.log('not equal')
      }
    }
  }
}
</script>

<style>
</style>
