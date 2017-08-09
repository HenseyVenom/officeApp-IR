<template>
  <nav class="navbar navbar-bottom">
    <router-link to="/dashboard/userslist">
      <btn-navitem type="submit" caption="Users"></btn-navitem>
    </router-link>
    <router-link to="/dashboard/officesaddform">
      <btn-navitem type="submit" caption="Offices"></btn-navitem>
    </router-link>
    <router-link to="/dashboard/levelsaddform">
      <btn-navitem type="submit" caption="Levels"></btn-navitem>
    </router-link>
    <router-link to="/dashboard/poisaddform">
      <btn-navitem type="submit" caption="POIs"></btn-navitem>
    </router-link>
    <router-link to="/dashboard/beaconsaddform">
      <btn-navitem type="submit" caption="Beacons"></btn-navitem>
    </router-link>
    <router-link to="/dashboard/requeststopicsaddform">
      <btn-navitem type="submit" caption="Requests"></btn-navitem>
    </router-link>
    <router-link to="/dashboard/requeststopicsaddform">
      <btn-navitem type="submit" caption="Requests topics"></btn-navitem>
    </router-link>
    <router-link to="/dashboard/domainsaddform">
      <btn-navitem type="submit" caption="Domains"></btn-navitem>
    </router-link>
    <router-link to="/dashboard/devicesaddform">
      <btn-navitem type="submit" caption="Devices"></btn-navitem>
    </router-link>
    <router-link to="/dashboard/notificationgroupaddform">
      <btn-navitem type="submit" caption="Notification group"></btn-navitem>
    </router-link>
  </nav>
</template>


<script>
export default {
  name: 'navigation-bar-bottom',
};
</script>

<style>
.navbar-bottom {
  text-align: center;
  display: block !important;
  padding: 10px !important;
  background-color: #303030;
}
</style>