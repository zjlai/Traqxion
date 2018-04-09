<template>
  <q-page padding>
    <h4>Create New Task</h4>
    <div class="col">
      <q-field
        label="Task Name"
        helper="Choose a name for your task">
          <q-input v-model="task.name" type="text" stack-label="Task Name" clearable autofocus/>
      </q-field>
      <q-field label="Description">
        <q-input type="textarea" v-model="task.description" rows="3" :max-height="100" float-label="Description" clearable />
      </q-field>
      <q-field
        label="Date Due"
        helper="Select due date">
        <q-datetime-picker v-model="task.duedate" type="date" />
      </q-field>
      <q-field
        label="Importance">
        <q-rating v-model="task.importance" :max="5" />
      </q-field>
      <q-field
        label="Set Reminder">
        <q-toggle v-model="reminder" />
      </q-field>
      <q-field
        label="When?"
        v-if="reminder">
        <q-select
          v-model="task.reminder"
          :options="reminderOptions" />
      </q-field>
    </div>
    <div class="q-mt-md row justify-end">
      <q-btn flat label="Create and assign to class" color="primary" @click="$router.replace('/todo/assign')" />
      <q-btn flat label="Cancel" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageTodo',
  data () {
    return {
      task: {
        name: '',
        description: '',
        duedate: new Date(),
        reminder: ''
      },
      reminder: false,
      reminderOptions: [
        {
          label: '3 Days Before',
          value: 'minusthree'
        },
        {
          label: '1 Day Before',
          value: 'minusone'
        },
        {
          label: 'Let the Traqxion bot decide!',
          value: 'auto'
        }
      ]
    }
  }
}
</script>

<style>
</style>
