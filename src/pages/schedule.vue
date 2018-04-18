<template>
  <q-page padding>
    <div class="row">
      <div class="col-4">
        <q-card>
        <!--  <q-card-title class="bg-primary text-white">
            My Schedule Today
            <span slot="subtitle">{{ todaysDate }}</span>
          </q-card-title> -->
          <q-card-main>
            <q-list multiline highlight link no-border>
              <q-list-header class="text-left q-display-1 bg-primary text-white q-pt-sm">
                My Schedule Today!
              </q-list-header>
              <q-list-header class="text-left q-subheading bg-primary text-white q-mb-sm">
                {{ todaysDate }}
              </q-list-header>
              <q-item v-for="event in events" :key="event.id">
                <q-item-side text-color="primary">
                  <q-item-tile>
                    <p class="q-subheading q-mb-sm">
                      {{ formatDate(event.start.dateTime) }} - {{ formatDate(event.end.dateTime) }}
                    </p>
                    <p class="q-caption uppercase text-right">{{ event.location }}</p>
                  </q-item-tile>
                </q-item-side>
                <q-item-main style="margin-left: 16px; padding-left: 16px; border-left: 2px solid #26a69a">
                  <q-item-tile>
                    <p class="q-subheading text-weight-bold q-mb-sm"> {{ event.summary }} </p>
                  </q-item-tile>
                  <q-item-tile>
                    {{ event.description }}
                  </q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </q-card-main>
        </q-card>
      </div>
      <div class="col-8">
        <q-card class="q-ml-md">
          <q-card-main>
            <q-list-header class="text-left q-display-1 bg-primary text-white q-pt-sm">
              My Schedule Today!
            </q-list-header>
            <calendar-month
              :eventArray="events" />
          </q-card-main>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { CalendarMonth } from 'quasar-calendar'
import { date } from 'quasar'
export default {
  name: 'PageSchedule',
  components: { CalendarMonth },
  data () {
    return {
      schedule: [
        { id: 0, stamp: '8am - 9am', subject: 'English', location: '1A', text: '' },
        { id: 1, stamp: '9am - 10am', subject: 'Maths', location: '2D', text: '' },
        { id: 2, stamp: '11am - 12pm', subject: 'Science', location: '3F', text: '' },
        { id: 3, stamp: '2pm - 2:30pm', subject: 'Meeting', location: 'Principal\'s Office', text: '' },
        { id: 4, stamp: '3pm - 6pm', subject: 'Choir', location: 'Choir Practice', text: '' }
      ],
      events: [
        { id: 0,
          summary: 'English Lesson',
          description: 'Chapter 2a + Spelling Test',
          reminders: [],
          location: '1A',
          start: {
            dateTime: '2018-04-18T08:00:00',
            timeZone: 'Asia/Singapore'
          },
          end: {
            dateTime: '2018-04-18T09:00:00',
            timeZone: 'Asia/Singapore'
          },
          color: 'primary'
        },
        { id: 1,
          summary: 'Science Lesson',
          description: 'Lab Experiment: Photosynthesis',
          location: 'Science Lab 2',
          start: {
            dateTime: '2018-04-18T09:00:00',
            timeZone: 'Asia/Singapore'
          },
          end: {
            dateTime: '2018-04-18T11:00:00',
            timeZone: 'Asia/Singapore'
          },
          color: 'primary'
        },
        { id: 2,
          summary: 'Maths Lesson',
          description: 'Geometry Angles',
          reminders: [],
          location: '4F',
          start: {
            dateTime: '2018-04-18T12:00:00',
            timeZone: 'Asia/Singapore'
          },
          end: {
            dateTime: '2018-04-18T13:00:00',
            timeZone: 'Asia/Singapore'
          },
          color: 'primary'
        },
        { id: 4,
          summary: 'Meeting',
          description: 'Meeting with Paul\'s Parents',
          location: 'Principal\'s Office',
          start: {
            dateTime: '2018-04-18T14:00:00',
            timeZone: 'Asia/Singapore'
          },
          end: {
            dateTime: '2018-04-18T14:30:00',
            timeZone: 'Asia/Singapore'
          },
          color: 'warning'
        },
        { id: 5,
          summary: 'CCA Choir',
          description: 'Choir Practice - Skills training',
          location: 'Auditorium',
          start: {
            dateTime: '2018-04-18T15:00:00',
            timeZone: 'Asia/Singapore'
          },
          end: {
            dateTime: '2018-04-18T18:30:00',
            timeZone: 'Asia/Singapore'
          },
          color: 'tertiary'
        }
      ]
    }
  },
  computed: {
    todaysDate: function () {
      return date.formatDate(new Date(), 'D MMMM YYYY, dddd')
    }
  },
  methods: {
    formatDate (dateString) {
      return date.formatDate(dateString, 'hh:mm A')
    }
  }
}
</script>

<style>
.c-align-left {
  text-align: left !important;
  width: 100%;
}
.c-margin-top {
  margin-top: -16px;
}
</style>
