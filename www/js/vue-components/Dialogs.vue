<template>
  <v-ons-page @deviceBackButton.prevent="log('pageDBB', $event)">
    <v-ons-toolbar>
      <div class="center">
        <v-ons-toolbar-button ref="myToolbarButton">Test</v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <v-ons-list>
      <v-ons-list-header>Notifications</v-ons-list-header>
      <v-ons-list-item
        tappable
        @click="$ons.notification.alert('Hello, world!')"
      >
        <div class="center">
          Alert
        </div>
      </v-ons-list-item>
      <v-ons-list-item
        tappable
        @click="$ons.notification.confirm('Do you like Onsen UI?')"
      >
        <div class="center">
          Confirmation
        </div>
      </v-ons-list-item>
      <v-ons-list-item
        tappable
        @click="$ons.notification.prompt('What is your name?')"
      >
        <div class="center">
          Prompt
        </div>
      </v-ons-list-item>


      <v-ons-list-header>Components</v-ons-list-header>
      <v-ons-list-item
        tappable
        @click="dialogVisible = true"
      >
        <div class="center">
          Simple Dialog
        </div>
        <div class="right">Model: {{dialogVisible}}</div>
      </v-ons-list-item>

      <v-ons-list-item
        tappable
        @click="alertDialog1Visible = true"
      >
        <div class="center">
          Alert Dialog (slots)
        </div>
        <div class="right">Model: {{alertDialog1Visible}}</div>
      </v-ons-list-item>

      <v-ons-list-item
        tappable
        @click="alertDialog2Visible = true"
      >
        <div class="center">
          Alert Dialog (props)
        </div>
        <div class="right">Model: {{alertDialog2Visible}}</div>
      </v-ons-list-item>

      <v-ons-list-item
        tappable
        @click="modalVisible = true"
      >
        <div class="center">
          Modal
        </div>
        <div class="right">Model: {{modalVisible}}</div>
      </v-ons-list-item>

      <v-ons-list-item
        tappable
        @click="popoverVisible = true"
      >
        <div class="center">
          Popover ($ref - prop)
        </div>
        <div class="right">Model: {{popoverVisible}}</div>
      </v-ons-list-item>
    </v-ons-list>

    <v-ons-dialog cancelable
      :visible="dialogVisible"
      @update="dialogVisible = $event"
      @deviceBackButton="log('dialogDBB'); $event.callParentHandler()"
      @preshow="log('preshow')"
      @postshow="log('postshow')"
      @prehide="log('prehide')"
      @posthide="log('posthide')"
    >
      Lorem ipsum
      <button @click="dialogVisible = !dialogVisible">toggle</button>
    </v-ons-dialog>

    <v-ons-alert-dialog cancelable
      modifier="rowfooter"
      :visible="alertDialog1Visible"
      @update="alertDialog1Visible = $event"
      @deviceBackButton="log('alertDialogDBB'); $event.callParentHandler()"
    >
      <span slot="title">Title slots</span>
      Lorem ipsum
      <button @click="alertDialog1Visible= !alertDialog1Visible">toggle</button>
      <template slot="footer">
        <button class="alert-dialog-button" @click="alertDialog1Visible = false">Ok</button>
        <button class="alert-dialog-button" @click="alertDialog1Visible = false">Cancel</button>
      </template>
    </v-ons-alert-dialog>

    <v-ons-alert-dialog cancelable
      modifier="rowfooter"
      :title="'Title props'"
      :footer="{Ok: () => alertDialog2Visible = false, Cancel: () => alertDialog2Visible = false}"
      :visible="alertDialog2Visible"
      @update="alertDialog2Visible = $event"
    >
      Lorem ipsum
      <button @click="alertDialog2Visible= !alertDialog2Visible">toggle</button>
    </v-ons-alert-dialog>

    <v-ons-modal
      :visible="modalVisible"
      @deviceBackButton="log('modalDBB'); $event.callParentHandler()"
    >
      <p>This is a modal</p>
      <p><ons-button @click="modalVisible = false">Close</ons-button></p>
    </v-ons-modal>

    <v-ons-popover cancelable
      :target="$refs.myToolbarButton"
      :visible="popoverVisible"
      @update="popoverVisible = $event"
      @deviceBackButton="log('popoverDBB'); $event.callParentHandler()"
      @preshow="log('preshow')"
      @postshow="log('postshow')"
      @prehide="log('prehide')"
      @posthide="log('posthide')"
    >
      Lorem ipsum
      <button @click="popoverVisible = !popoverVisible">toggle</button>
    </v-ons-popover>

  </v-ons-page>
</template>

<script>
	export default {
    data() {
      return {
        dialogVisible: false,
        alertDialog1Visible: false,
        alertDialog2Visible: false,
        popoverVisible: false,
        modalVisible: false
      }
    },
    methods: {
      log() {
        console.log(...arguments);
      }
    }
	};
</script>
