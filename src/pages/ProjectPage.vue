<template>
  <q-page class="bg-background column">
    <div class="row q-px-lg q-pt-lg">
      <h1 class="text-h6">Previous Project & Experience</h1>
    </div>
    <q-separator />
    <div class="col row q-px-md q-py-sm">
      <q-slide-transition>
        <div v-if="selectedProject" class="col column items-center justify-center detail-card">
          <div class="detail-card-inner q-pa-md col column">
            <div class="text-h6">
              {{ selectedProject.name }}
            </div>
            <q-separator />
            <q-scroll-area class="col">
              <div class="text-body1 q-pt-sm text-justify">
                {{ selectedProject.fullDescription }}
              </div>
              <br />
              <div class="text-body1"><strong>Role:</strong>&nbsp;{{ selectedProject.role }}</div>
              <br />
              <div class="text-body1 row">
                <div><strong>Tech:</strong></div>
                &nbsp;
                <div class="col row q-col-gutter-y-xs">
                  <div v-for="(tech, t) in selectedProject.tech" :key="t">
                    <span class="tech-badge">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <div class="text-body1"><strong>Responsibilities:</strong></div>
              <div class="text-body1">
                <ul>
                  <li v-for="(rep, r) in selectedProject.responsibility" :key="r">{{ rep }}</li>
                </ul>
              </div>
            </q-scroll-area>
          </div>
        </div>
      </q-slide-transition>
      <q-scroll-area :class="`${selectedProject ? 'col-4' : 'col'}`">
        <div class="row">
          <template v-for="(project, p) in projectList" :key="p">
            <div
              :class="`col-${selectedProject ? '12' : '4'} project-card row`"
              @click="selectedProject = project"
            >
              <div
                :class="`project-card-inner q-pa-sm column items-center justify-center ${selectedProject && selectedProject.tid === project.tid ? 'selected' : ''}`"
              >
                <div class="text-h6">{{ project.name }}</div>
                <div class="project-sub-detail row justify-center items-center">
                  <p class="text-center align-center text-body2">{{ project.description }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </q-scroll-area>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Project } from 'components/models';
import { theProjectList } from 'src/data/project';
const projectList = ref<Project[]>(theProjectList);
const selectedProject = ref<Project | null>(null);
</script>

<style>
.project-card {
  padding: 5px;
  aspect-ratio: 2;
}

.project-card-inner {
  border: 1px solid var(--text-muted);
  border-radius: 10px;
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.project-card-inner:hover {
  background-color: var(--light-cool-grey);
}

.project-sub-detail {
  display: none;
}

.project-card-inner:hover .project-sub-detail {
  display: inline;
}

.project-card-inner.selected .project-sub-detail {
  display: inline;
}

.project-card-inner.selected {
  background-color: var(--secondary);
  color: var(--white);
  cursor: default;
}

.detail-card {
  padding: 5px;
}

.detail-card-inner {
  border: 1px solid var(--text-muted);
  border-radius: 10px;
  height: 100%;
  width: 100%;
}
</style>
