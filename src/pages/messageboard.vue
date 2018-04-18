<template>
  <q-page>
    <!-- content -->
    <div class="row" style="min-height: calc(100vh - 50px);">
      <div class="col-2 bg-indigo-9">
        <q-list dark no-border>
          <q-list-header>
            Starrerd Boards
          </q-list-header>
          <q-item v-for="board in boardsStar" :key="board.id" highlight link @click.native="selectBoard(board)">
            <q-item-side>
              <q-item-tile icon="star" color="yellow" />
            </q-item-side>
            <q-item-main :label="board.title" inset />
          </q-item>
          <q-list-header>
            Boards
          </q-list-header>
          <q-item v-for="board in boardsNorm" :key="board.id" highlight link @click.native="selectBoard(board)">
            <q-item-main :label="board.title" inset />
          </q-item>
        </q-list>
      </div>
      <div class="relative row" :class="{ 'col-7': activeBoard.chat, 'col-10': !activeBoard.chat }">
        <div class="col-11">
          <q-toolbar color="transparent" text-color="black">
            <q-toolbar-title>
              {{activeBoard.title}} Message Board!
            </q-toolbar-title>
          </q-toolbar>
          <q-list highlight link no-border class="q-ma-md">
            <q-collapsible group="messages" collapse-icon="none" class="q-px-none" v-for="message in messages" :key="message.id" popup :label="message.title" :sublabel="message.subtitle">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div>
                <q-item-separator />
                <q-item>
                  <q-item-main>
                    Alfred's Dad
                  </q-item-main>
                  <q-item-side right stamp="03 April 2018 12:09" />
                </q-item>
                <q-item multiline>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </q-item>
              </div>
              <div>
                <q-item-separator />
                <q-item>
                  <q-item-main>
                    Joan's Mom
                  </q-item-main>
                  <q-item-side right stamp="04 April 2018 08:15" />
                </q-item>
                <q-item multiline>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </q-item>
              </div>
            </q-collapsible>
          </q-list>
        </div>
        <div class="col-1 row items-end justify-center">
          <q-btn
            round
            color="primary"
            size="lg"
            @click="addMessage"
            class="q-mb-xl"
            icon="add"
            style=""
          />
        </div>
      </div>
      <div v-if="activeBoard.chat === true" class="col-3 shadow-up-2 q-px-lg">
      <div class="q-display-1 q-mb-md text-grey">Chat Room</div>
      <p class="caption">Discuss items, share ideas and collaborate together!</p>
      <q-scroll-area style="height: 900px; max-height: 70vh;">
        <q-list no-border highlight>
          <q-list-item v-for="chat in chatMessages" :key="chat.id">
            <q-item-main v-if="chat.label">
              <q-item-tile>
                <div class="q-list-header text-center">{{chat.label}}</div>
              </q-item-tile>
            </q-item-main>
            <span v-if="chat.text.length > 0" v-for="(textMsg, index) in chat.text" :key="index" class="q-item relative-position">
              <q-item-side :letter="chat.name[0]" color="blue" inverted>
              </q-item-side>
              <q-item-main>
                <q-item-tile>
                  <span class="text-weight-bold">{{chat.name}}</span>
                  <span class="q-mx-md q-subheading text-faded">
                    {{chat.stamp}}
                  </span>
                </q-item-tile>
                <q-item-tile>
                  <span class="text-weight-light">
                    {{chat.text[index]}}
                  </span>
                </q-item-tile>
              </q-item-main>
            </span>
          </q-list-item>
        </q-list>
      </q-scroll-area>
      <div class="full-width q-py-md round-borders">
        <q-input class="q-pa-md" type="textarea" v-model="chatinput" rows="1" autofocus placeholder="Type your message here" />
      </div>
      </div>
    </div>
    <q-modal v-model="newMessageModal" maximized>
      <div class="q-pa-md">
        <h4>New Message</h4>
        <div>
          <q-field label="Message Title" label-width="2" class="q-mb-md">
            <q-input v-model="newMessage.title" />
          </q-field>
          <q-field label="Description" label-width="2" class="q-mb-md">
            <q-editor v-model="newMessage.description"
            :toolbar="[
              ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
              ['token', 'hr', 'link', 'custom_btn'],
              ['print', 'fullscreen'],
              [
                {
                  label: $q.i18n.editor.formatting,
                  icon: $q.icon.editor.formatting,
                  list: 'no-icons',
                  options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
                },
                {
                  label: $q.i18n.editor.fontSize,
                  icon: $q.icon.editor.fontSize,
                  fixedLabel: true,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7']
                },
                {
                  label: $q.i18n.editor.defaultFont,
                  icon: $q.icon.editor.font,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: ['default_font', 'arial', 'arial_black', 'comic_sans', 'courier_new', 'impact', 'lucida_grande', 'times_new_roman', 'verdana']
                },
                'removeFormat'
              ],
              ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
              [
                {
                  label: $q.i18n.editor.align,
                  icon: $q.icon.editor.align,
                  fixedLabel: true,
                  list: 'only-icons',
                  options: ['left', 'center', 'right', 'justify']
                },
                {
                  label: $q.i18n.editor.align,
                  icon: $q.icon.editor.align,
                  fixedLabel: true,
                  options: ['left', 'center', 'right', 'justify']
                }
              ],
              ['undo', 'redo']
            ]"
            :fonts="{
              arial: 'Arial',
              arial_black: 'Arial Black',
              comic_sans: 'Comic Sans MS',
              courier_new: 'Courier New',
              impact: 'Impact',
              lucida_grande: 'Lucida Grande',
              times_new_roman: 'Times New Roman',
              verdana: 'Verdana'
            }"/>
          </q-field>
          <q-field label="Upload Images or videos" class="q-mb-md">
            <q-uploader :url="url" multiple extensions=".gif,.jpg,.jpeg,.png,.mp4,.mp3,.wmv" clearable />
          </q-field>
          <q-btn label="Post Message!" />
          <q-btn label="Cancel" @click.native="closeModal()"/>
        </div>
      </div>
    </q-modal>
  </q-page>
</template>

<script>
export default {
  name: 'PageMessageboard',
  data () {
    return {
      boards: [
        { id: 0, title: 'Class 1B', star: false, chat: false },
        { id: 1, title: 'Class 2D', star: false, chat: false },
        { id: 2, title: 'Class 3F', star: false, chat: false },
        { id: 3, title: 'Choir', star: true, chat: false },
        { id: 4, title: 'Sports Day Org Committee', star: true, chat: true },
        { id: 5, title: 'English Exam Committee', star: true, chat: true }
      ],
      activeBoard: {
        chat: false
      },
      messages: [
        { id: 0, title: 'General Announcements', subtitle: 'Class activities' },
        { id: 1, title: 'Support your classmates!', subtitle: 'Our friends representing the school in sports' },
        { id: 2, title: 'Exam Schedule', subtitle: 'Dates and Instructions' },
        { id: 3, title: 'Supplementary Classes', subtitle: 'Dates and namelist' },
        { id: 4, title: 'Excursions', subtitle: 'Pictures and More!' }
      ],
      newMessageModal: false,
      newMessage: {
        title: '',
        description: '',
        author: 'Username'
      },
      url: 'url',
      chatMessages: [
        {
          label: 'Friday, 18th'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'statics/boy-avatar.png',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          sent: true,
          textColor: 'white',
          bgColor: 'black',
          avatar: 'statics/linux-avatar.png',
          stamp: 'Yesterday at 13:50'
        },
        {
          name: 'Jane',
          text: ['And you?'],
          sent: true,
          avatar: 'statics/linux-avatar.png',
          stamp: 'Yesterday at 13:51'
        },
        {
          label: 'Saturday, 19th'
        },
        {
          name: 'Vladimir',
          bgColor: 'amber',
          textColor: 'white',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          avatar: 'statics/boy-avatar.png',
          stamp: '13:55'
        },
        {
          label: 'Sunday, 20th'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'statics/boy-avatar.png',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          sent: true,
          avatar: 'statics/linux-avatar.png',
          stamp: 'Yesterday at 13:50'
        },
        {
          name: 'Jane',
          text: ['And you?'],
          sent: true,
          avatar: 'statics/linux-avatar.png',
          stamp: 'Yesterday at 13:51'
        },
        {
          label: 'Monday, 20th'
        },
        {
          name: 'Vladimir',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          avatar: 'statics/boy-avatar.png',
          stamp: '13:55'
        },
        {
          label: 'Tuesday, 21th'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'statics/boy-avatar.png',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          sent: true,
          avatar: 'statics/linux-avatar.png',
          stamp: 'Yesterday at 13:50'
        },
        {
          name: 'Jane',
          text: ['And you?'],
          sent: true,
          avatar: 'statics/linux-avatar.png',
          stamp: 'Yesterday at 13:51'
        },
        {
          label: 'Sunday, 19th'
        },
        {
          name: 'Vladimir',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          avatar: 'statics/boy-avatar.png',
          stamp: '13:55'
        },
        {
          label: 'Wednesday, 22th'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'statics/boy-avatar.png',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          sent: true,
          avatar: 'statics/linux-avatar.png',
          stamp: 'Yesterday at 13:50'
        },
        {
          name: 'Jane',
          text: ['And you?'],
          sent: true,
          avatar: 'statics/linux-avatar.png',
          stamp: 'Yesterday at 13:51'
        },
        {
          label: 'Thursday, 23th'
        },
        {
          name: 'Vladimir',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          avatar: 'statics/boy-avatar.png',
          stamp: '13:55'
        }
      ]
    }
  },
  computed: {
    boardsStar () {
      var sortedboards = this.$_.filter(this.boards, { 'star': true })
      return this.$_.sortBy(sortedboards, ['title'])
    },
    boardsNorm () {
      var sortedboards = this.$_.filter(this.boards, { 'star': false })
      return this.$_.sortBy(sortedboards, ['title'])
    }
  },
  methods: {
    togglestar (board) {
      board.star = !board.star
    },
    selectBoard (board) {
      this.activeBoard = board
      console.log(this.activeBoard)
    },
    addMessage () {
      this.newMessageModal = true
    },
    closeModal () {
      this.newMessage = {
        title: '',
        description: '',
        author: 'Username'
      }
      this.newMessageModal = false
    }
  }
}
</script>

<style>
</style>
