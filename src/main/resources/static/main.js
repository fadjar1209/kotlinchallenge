var vue_app = new Vue({
    el: '#app',
    //Letakkan JAVASCRIPT disini
    data() {
      return {
        perPage: 10,
        currentPage: 1,
        fields: [
          'id',
          'name',
          'price',
            'quantity',
          { key: 'actions', label: 'Actions' }
        ],
        items: null,
        form: {
            id: '',
            name: '',
            price: '',
            quantity: '',
        },
        show: true,
        form_action : 'Insert',
        form_index : 0,
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    methods: {
      info(item, index, button) {
        alert(JSON.stringify(item, null, 2))
        //this.infoModal.title = `Row index: ${index}`
        //this.infoModal.content = JSON.stringify(item, null, 2)
        //this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      edit(item, index, button) {
        alert(JSON.stringify(item, null, 2))
        this.form.id = item.id
        this.form.name = item.name
        this.form.price = item.price
          this.form.quantity = item.quantity
        this.form_action = 'Update'
        this.form_index = index + ((this.currentPage - 1) * this.perPage)
        //this.infoModal.title = `Row index: ${index}`
        //this.infoModal.content = JSON.stringify(item, null, 2)
        //this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      del(item, index, button) {
        this.items.splice(index + ((this.currentPage - 1) * this.perPage), 1)
        axios.delete('http://localhost:8080/api/products/'+item.id)
          .then(response => {
            console.log(response);
          }).catch(response => {
            console.log(response);
          });
        // axios({
        //   method: 'delete',
        //   url: 'http://localhost:3000/api/users',
        //   headers: {},
        //   data: {
        //       id: this.form.id,
        //       first_name: this.form.first_name,
        //       last_name: this.form.last_name,
        //     }
        //   }).then(response => {
        //     console.log(response);
        //   }).catch(response => {
        //     console.log(response);
        //   });
      },
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
        if (this.form_action == 'Update'){
          axios.put('http://localhost:8080/api/products/'+this.items[this.form_index].id,
            {
              id: this.form.id,
              name: this.form.name,
              price: this.form.price,
                quantity: this.form.quantity,
            }
          ).then(response => {
            this.items[this.form_index].id = this.form.id
            this.items[this.form_index].name = this.form.name
            this.items[this.form_index].price = this.form.price
              this.items[this.form_index].quantity = this.form.quantity
            console.log(response);
          }).catch(response => {
            console.log(response);
          });
        } else { //Insert
          this.items.push({ id: this.form.id, name: this.form.name, price: this.form.price, quantity: this.form.quantity })
          axios({
            method: 'post',
            url: 'http://localhost:8080/api/products',
            headers: {},
            data: {
                id: this.form.id,
                name: this.form.name,
                price: this.form.price,
                quantity: this.form.quantity,
              }
            }).then(response => {
              console.log(response);
            }).catch(response => {
              console.log(response);
            });
        }
        this.form.id = ''
        this.form.name = ''
        this.form.price = ''
          this.form.quantity = ''
        this.form_action = 'Insert'
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.id = ''
        this.form.name = ''
        this.form.price = ''
          this.form.quantity = ''
        this.form_action = 'Insert'
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
	  mounted() {
      axios
        .get("http://10.10.10.187:8080/api/products")
        .then(response => {
          this.items = response.data.data
        })
        .catch(err => {
          console.log(err)
        })
	  }
 });

// var app = new Vue({
//     el: '#app',
//     data () {
//         return {
//             info: null,
//             loading: true,
//             errored: false
//         }
//     },
//     filters: {
//         currencydecimal (value) {
//             return value.toFixed(2)
//         }
//     },
//     mounted () {
//         axios
//             .get('http://10.10.10.187:8080/api/products', {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//             .then(response => {
//                 this.info = response.data.data
//             })
//             .catch(error => {
//                 console.log(error)
//                 this.errored = true
//             })
//             .finally(() => this.loading = false)
//     }
// })