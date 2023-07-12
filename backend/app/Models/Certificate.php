<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Certificate extends Model
{
    use HasFactory;
    
    protected $connection = 'mongodb';
    protected $collection = 'certificates';

    protected $fillable = [
        'id_template'.
        'id_logo',
        'id_student',
        'id_cd'
    ];

    protected $casts = [
        'id_template'  => 'string',
        'id_logo'  => 'string',
        'id_student'  => 'string',
        'id_cd'  => 'string'
    ];

}
