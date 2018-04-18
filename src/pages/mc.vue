<template>
  <q-page>
    <q-modal v-model="opened">
      <div class="q-pa-md">
        <h4>Upload MC</h4>
        <q-field
          label="Student's Name">
            <q-input v-model="uploadmc.name" type="text" stack-label="Student's Name" autofocus/>
        </q-field>
        <q-field label="Class">
          <q-select
            v-model="uploadmc.class"
            :options="classes"
          />
        </q-field>
        <q-field
          label="MC Start Date">
          <q-datetime-picker v-model="uploadmc.startdate" type="date" />
        </q-field>
        <q-field
          label="MC End Date">
          <q-datetime-picker v-model="uploadmc.enddate" type="date" />
        </q-field>
        <q-field label="Upload MC">
          <q-uploader
            :url="url"
            extensions=".gif,.jpg,.jpeg,.png"
            multiple :addtional-fields="uploadmc"
            auto-expand />
        </q-field>
        <div class="q-my-md text-right">
          <q-btn
            color="primary"
            @click="opened = false"
            label="Upload"
          />
          <q-btn
            @click="opened = false"
            label="cancel"
          />
        </div>
      </div>
    </q-modal>
    <div class="row">
      <div class="col">
        <q-toolbar inverted class="shadow-1">
          <q-toolbar-title>
            Medical Certificates Dashboard
          </q-toolbar-title>
          <q-btn round dense label="Upload MC" icon="file_upload" text-color="primary" @click="opened = true"/>
        </q-toolbar>
        <div class="row">
          <div class="col q-pa-lg">
            <div class="text-weight-bold q-title q-mb-lg">
              Who is sick today?
            </div>
            <div v-for="mc in mcs" v-if="mcs.length > 0" :key="mc.id">
                <q-card text-color="black">
                  <q-card-title>
                    {{mc.name}} ({{mc.class}})
                    <span slot="subtitle">{{mc.startdate}} - {{mc.enddate}}</span>
                    <q-card-media slot="right">
                      <img :src="mc.upload" class="mc-list"/>
                    </q-card-media>
                  </q-card-title>
                  <q-card-separator />
                  <q-card-actions>
                    <q-btn flat label="See Details" class="text-right" />
                  </q-card-actions>
                </q-card>
            </div>
            <div v-if="mcs.length===0" class="q-title text-weight-light q-pt-lg">
              No MCs Today! Everybody's healthy!
            </div>
          </div>
          <div class="col">
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageMCs',
  data () {
    return {
      opened: false,
      mcs: [
        { id: 1, upload: 'assets/mc_sample_1.jpeg', name: 'Alfred Ack', class: '3A', startdate: '18/04/2018', enddate: '20/04/2018' },
        { id: 2, upload: 'assets/mc_sample_2.jpg', name: 'Boris Bo', class: '1D', startdate: '18/04/2018', enddate: '19/04/2018' },
        { id: 3, upload: 'assets/mc_sample_3.JPG', name: 'Charis Tan', class: '6F', startdate: '18/04/2018', enddate: '28/04/2018' }
      ],
      uploadmc: {
        name: '',
        class: '',
        startdate: new Date(),
        enddate: new Date()
      },
      classes: [
        { value: '1A', label: '1A' },
        { value: '2D', label: '2D' },
        { value: '2F', label: '2F' },
        { value: '3B', label: '3B' },
        { value: '3G', label: '3G' },
        { value: '6A', label: '6A' },
        { value: '6B', label: '6B' },
        { value: '6C', label: '6C' }
      ],
      url: ''
    }
  }
}
</script>

<style>
.mc-list {
  max-width: 200px;
}
</style>
