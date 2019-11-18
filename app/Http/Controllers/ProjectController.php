<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;

class ProjectController extends Controller
{
    public function index () {

        $projects = Project::orderBy('id')
                        ->get();

        return $projects;

    }
}
