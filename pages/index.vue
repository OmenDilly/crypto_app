<template>
  <div class="table__container">
    <div class="sidebar">
      <FilterWindow/>
      <DiffStream/>
    </div>
    <table class="table__card">
      <thead class='header'>
        <tr>
          <th>Покупка</th>
          <th>Продажа</th>
        </tr>
      </thead>
      <tbody class='body'>
        <tr>
          <td>
            <table class='bids'>
              <thead>
                <tr>
                  <th class='price'>Цена</th>
                  <th class='amount'>Колличество</th>
                  <th class='total'>Всего</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in depth.bids" :key='index' class='bids__item'>
                  <td class='price'>
                    {{parseFloat(item[0])}}
                  </td>
                  <td class='amount'>
                    {{parseFloat(item[1])}}
                  </td>
                  <td class='total'>
                    {{parseFloat(item[0] * item[1]).toFixed(6)}}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>
            <table class='asks'>
              <thead>
                <tr>
                  <th class='price'>Цена</th>
                  <th class='amount'>Колличество</th>
                  <th class='total'>Всего</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in depth.asks" :key='index' class='asks__item'>
                  <td class='price'>
                    {{parseFloat(item[0])}}
                  </td>
                  <td class='amount'>
                    {{parseFloat(item[1])}}
                  </td>
                  <td class='total'>
                    {{parseFloat(item[0] * item[1]).toFixed(6)}}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import FilterWindow from '../components/FilterWindow'
import DiffStream from '../components/DiffStream'

export default {
  components: {
    FilterWindow,
    DiffStream
  },
  async fetch({store}) {
      await store.dispatch('depth/fetch')
      store.dispatch('depth/connect')
  },
  computed: {
    depth() {
      return this.$store.getters['depth/depth']
    }
  }
}
</script>

<style lang='sass'>
  .table__container
    display: grid
    justify-self: center
    grid-template-columns: 1fr 2fr
    gap: $spacing
    padding: $spacing
    background-color: $backgroundSecondary
    @media screen and ( max-width: $lg )  
      grid-template-columns: auto
    .sidebar
      display: grid
      gap: $spacing
      grid-template-rows: 1fr 3fr
    .table__card
      background-color: $backgroundPrimary
      text-align: center
      padding: 10px 5px
      box-shadow: $shadow
      border-radius: $radius
      .total
        @media screen and ( max-width: $md )
          display: none
      .amount
        @media screen and ( max-width: $xs )
          display: none
      .header
        display: table
        width: 100%
        table-layout: fixed
      .body
        @extend .header
        display: block
        overflow: hidden
        table-layout: fixed
        transition: all .3s ease-in-out
        max-height: 600px
        &::-webkit-scrollbar
          border-radius: $radius
          height: 10px
          width: 8px
        

        &::-webkit-scrollbar-thumb 
          background: lighten($primary, 20)
          border-radius: $radius
        

        &::-webkit-scrollbar-track 
          border-radius: $radius
        
        &:hover
          overflow-y: scroll
          overflow-y: overlay
          
        .asks
          thead
            color: $fontSecondary
          .asks__item
            color: $error
        .bids
          thead
            color: $fontSecondary
          .bids__item
            color: $success
      tr
        @extend .header
        padding: 5px
        &:hover + td
          background-color: $primary
      .bid
      .title
        color: $primary
</style>
