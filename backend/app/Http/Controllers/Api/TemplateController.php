<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Template;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TemplateController extends Controller
{
    public function index()
    {
        $templates = Template::all();
        return response()->json([
            "result" => $templates
        ], Response::HTTP_OK);
    }
    public function show($id)
    {
        $template = Template::findOrFail($id);
        return response()->json(['result' => $template], Response::HTTP_OK);
    }
    public function store(Request $request)
    {
        $template = new Template;
        $template->urlImg = $request->urlImg;
        $template->name = $request->name;
        $template->save();

        return response()->json(['result' => $template], Response::HTTP_CREATED);
    }
    public function update(Request $request)
    {
        $template = Template::findOrFail($request->id);
        $template->urlImg = $request->urlImg;
        $template->name = $request->name;
        $template->save();

        return response()->json(['result' => $template], Response::HTTP_CREATED);
    }
}
