<template>
  <div class="project-overview">
    <h2>Project Overview:</h2>
    <p>This is a simple <span class="highlight">
      CRUD</span> project where I have used <span class="highlight">Vue 3</span> and <span class="highlight">Vuex 4.</span> For backend API I have used <a href="https://jsonplaceholder.typicode.com/">jsonplaceholder.</a> <br>
      Source code for my entire project: <a href="https://github.com/masud563/vue-crud-operation"><i class="fab fa-github"></i></a> 
      </p>
  </div>

  <div class="project-spec">
    <h2>Project Specification:</h2>
    <ul>
      <li><b>User module:</b>
        <ul>
          <li>All users page as a tabular format</li>
          <li>Filter with name, email and username</li>
          <li>Add, update and delete functionality</li>
          <li>Pagination (default page limit=4)</li>
          <li>Single user details page
            <ul>
              <li>User details</li>
              <li>All post for a specific user</li>
              <li>All todos for a specific user</li>
              <li>All todos for a specific User
                <ul type="disc">
                  <li>Seperate todos by completed or not</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li><b>Post module:</b>
        <ul>
          <li>All posts page as a tabular format</li>
          <li>Filter with title and userId</li>
          <li>Add, update and delete functionality</li>
          <li>Pagination - (default page limit=10)</li>
          <li>Single post details page
            <ul>
              <li>Post details</li>
              <li>All comments for a specific post</li>
            </ul>
          </li>
        </ul>
      </li>
      <li><b>Album module:</b>
        <ul>
          <li>All album page as a tabular format</li>
          <li>Filter with title and userId</li>
          <li>Pagination - (default page limit=10)</li>
          <li>Single album details page
            <ul>
              <li>Album details</li>
              <li>All photos as a card for a specific album</li>
            </ul>
          </li>
        </ul>
      </li>
      <li><b>Login module:</b>
        <ul>
          <li>Email and Password (Treat username as password) - using Users Api</li>
          <li>When a user is logged in the whole website shows only that user's data and others will be hidden otherwise full data will be shown.</li>
        </ul>
      </li>
      <li><b>Toast:</b>
        <ul>
          <li>A toast will appear for every api action. (error or success)</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="api">
    <h2>APIs:</h2>
    <ul>
      <li><b>BASE_URL:</b><a href="https://jsonplaceholder.typicode.com/">https://jsonplaceholder.typicode.com/</a>
        <ul>
          <li><b>Users:</b>
            <ul>
              <li>GET,POST: <a href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a> </li>
              <li>GET,PUT,DELETE: <a href=" https://jsonplaceholder.typicode.com/users/1"> https://jsonplaceholder.typicode.com/users/1</a></li>
            </ul>
          </li>
          <li><b>Posts:</b>
            <ul>
              <li>GET,POST: <a href="https://jsonplaceholder.typicode.com/posts">https://jsonplaceholder.typicode.com/posts</a> </li>
              <li>GET,PUT,DELETE: <a href=" https://jsonplaceholder.typicode.com/posts/1"> https://jsonplaceholder.typicode.com/posts/1</a></li>
            </ul>
          </li>
          <li><b>Comments:</b>
            <ul>
              <li>GET: <a href="https://jsonplaceholder.typicode.com/comments">https://jsonplaceholder.typicode.com/comments</a></li>
            </ul>
          </li>
          <li><b>Todos:</b>
            <ul>
              <li>GET: <a href="https://jsonplaceholder.typicode.com/todos">https://jsonplaceholder.typicode.com/todos</a></li>
            </ul>
          </li>
          <li><b>Albums:</b>
            <ul>
              <li>GET: <a href="https://jsonplaceholder.typicode.com/albums">https://jsonplaceholder.typicode.com/albums</a></li>
            </ul>
          </li>
          <li><b>Photos:</b>
            <ul>
              <li>GET: <a href="https://jsonplaceholder.typicode.com/photos">https://jsonplaceholder.typicode.com/photos</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>